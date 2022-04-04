from flask import Flask, render_template, url_for
 
app = Flask (__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

@app.route ('/')
def aDePF():
    return render_template('ADeP.html')

@app.route ('/Demo_1')
def demo():
    return render_template('Demo.html')

@app.route ('/Demo_2')
def demo1():
    return render_template('Demo1.html')

if __name__ == "__main__":
    app.run(debug=True)