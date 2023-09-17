import os
import whisper

from openpyxl import load_workbook, Workbook
from tkinter import Tk
from tkinter.filedialog import askopenfilename

# 实例化
root = Tk()
root.withdraw()

file = askopenfilename()
filename = os.path.basename(file)
root_directory = os.path.dirname(file)

print('开始加载')
print(root_directory)
print(filename.split('.')[0])
model = whisper.load_model('large')
result = model.transcribe(file)
print('加载完毕')

# 创建一个workbook对象
whisper_file = Workbook()
# 获取active worksheet
worksheet = whisper_file.active
# 写入数据
worksheet['A1'] = '文章内容'
worksheet['B1'] = '音频起始位置'
worksheet['C1'] = '音频结束位置'

for i in result['segments']:
    worksheet.append([i['text'], i['start'], i['end']])
output_path = root_directory + '/' + filename.split('.')[0] + '.xlsx'
whisper_file.save(output_path)
print('运行完毕')
