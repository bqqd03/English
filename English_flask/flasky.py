from app import create_app, db
from flask_cors import CORS
from flask_script import Manager, Shell

app = create_app('development')
CORS(app, supports_credentials=True, resources={r'/*': {'origins': '*'}})
manager = Manager(app)


@app.shell_context_processor
def make_shell_context():
    return dict(db=db)


manager.add_command("shell", Shell(make_context=make_shell_context))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # debug=True 打开调试模式（重载器和调试器）
    # manager.run()

    # 创建数据表：
    # 在终端 输入 python flasky.py shell
    # 然后输入 db.create_all()，即可创建所有表
