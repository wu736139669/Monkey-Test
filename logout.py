# coding:utf-8
import atx
import os
import time

com = atx.connect("http://localhost:8100") 
com.start_app("com.myapp")
print(u'开始退出登录测试')
time.sleep(3)

# 获取我的按钮
my_btn = com(class_name="XCUIElementTypeButton", name='\u6211', label='\u6211')
my_btn.click()
	
# 获取我页面的第二个cell
my_cell = com(class_name="XCUIElementTypeCell")[1]
my_cell.click()


# 退出登录按钮
login_btn = com(class_name="XCUIElementTypeButton", name='\u9000\u51fa\u767b\u5f55', label='\u9000\u51fa\u767b\u5f55')
login_btn.click()

# 点击确定按钮
sure_btn = com(class_name="XCUIElementTypeButton", name='\u786e\u5b9a', label='\u786e\u5b9a')
sure_btn.click()

# 判断是否有立即登录按钮，有代表成功
nowlogin_btn = com(class_name="XCUIElementTypeButton", name='\u7acb\u5373\u767b\u5f55', label='\u7acb\u5373\u767b\u5f55')
time.sleep(1)
if nowlogin_btn.exists:
	print("logout success")

# os._exit()