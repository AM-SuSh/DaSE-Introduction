import requests
import pandas as pd
import re
from lxml import etree

url = 'https://www.jjwxc.net/topten.php?orderstr=7&t=2'
# 200服务器返回网页
r = requests.get(url)
print("begin:", r.status_code)
# 解码：默认html编码格式为‘utf-8’,晋江的编码为‘gb18030’
rt = r.content.decode('gb18030')
et = etree.HTML(rt)

book = et.xpath('//table[3]//a/text()')

link = et.xpath('//table[3]//a[@class="tooltip"]/@href')

td_text = et.xpath('//table[3]//td[@height="23" and @align="center"]//text()')
cleaned_text = [text.strip() for text in td_text]
filtered = [item for item in cleaned_text if item != '' and not item.isdigit()]

td_list = et.xpath('//table[3]//td[@height="23" and @align="right"]//text()')
cleaned_list = [text.replace('\xa0', '').replace('\r', '').replace('\n', '').strip() for text in td_list]

time_str = et.xpath('//td[@align="center"]/text()')
time_pattern = r'\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}'
time_list = [item for item in time_str if re.match(time_pattern, item.strip())]

book_title = []
book_author = []
book_tag = []
book_type = []
book_cond = []
book_intro = []
book_num = []
book_score = []
book_time = []
# 书名、作者
for i in range(0, len(book), 2):
    book_author.append(book[i])
    book_title.append(book[i + 1])
# 类型、进度
for i in range(0,len(filtered), 2):
    book_type.append(filtered[i])
    book_cond.append(filtered[i+1])
# 字数、积分
for i in range(0,len(cleaned_list), 2):
    book_num.append(cleaned_list[i])
    book_score.append(cleaned_list[i+1])
# 发表时间
for i in range(0,len(time_list)):
    book_time.append(time_list[i])
# link中爬取的页面链接缺少头
head = 'https://www.jjwxc.net/'
for s in link:
    s = head + s
    r = requests.get(s)
    rt = r.content.decode('gb18030', errors='ignore')
    et = etree.HTML(rt)
    sr = et.xpath('//a[@style="text-decoration:none;color: red;"]/text()')
    div_with_br = et.xpath('//div[@id="novelintro"]')
    book_tag.append(sr)
    ne = []
    for elem in div_with_br:
        for part in elem.itertext():
            ne.append(part)
    full_text = ''.join(ne)
    text = full_text.replace('\u3000', '')
    book_intro.append(text)

data = list(zip(book_title, book_author, book_type, book_cond, book_num, book_score, book_tag, book_time, book_intro))
columns = ['书名', '作者', '类型', '进度', '字数', '积分', '标签', '时间', '简介']
df = pd.DataFrame(data, columns=columns)
df.to_excel('data.xlsx', index=False)
print("finish!")