# coding:utf-8
import atx
import os
import time

com = atx.connect("http://localhost:8100") 
com.start_app("com.myapp")
print(u'开始登录测试')
time.sleep(3)

# 获取我的按钮
my_btn = com(class_name="XCUIElementTypeButton", name='\u6211', label='\u6211')
my_btn.click()
	
# 获取我页面的第二个cell
my_cell = com(class_name="XCUIElementTypeCell")[1]
my_cell.click()

# 获取账号输入框
account_label = com(class_name="XCUIElementTypeTextField")[0]
account_label.clear_text()
account_label.set_text("15657128262")

# 获取密码输入框
pwd_label = com(class_name="XCUIElementTypeSecureTextField")[0]
pwd_label.clear_text()
pwd_label.set_text("a123456")

# 登录按钮
login_btn = com(class_name="XCUIElementTypeButton", name='\u767b\u5f55', label='\u767b\u5f55')
login_btn.click()

# 最后判断是否在我的页面，是表示成功
nav_title = com(class_name="XCUIElementTypeNavigationBar")[0]
time.sleep(1)
if nav_title.exists:
	print('login successs')
# os._exit()