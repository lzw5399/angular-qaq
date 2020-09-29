import {Component, OnInit} from '@angular/core';

// @Component 就是一个装饰器
// selector 定义组件的
@Component({
  selector: 'app-root233',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '这是组件内变量的内容'
  num = 66

  classStr = 'bgBlue'

  classStr2 = 'bgPink'

  htmlStr = '<span>html text</span>'

  public sum(a: number, b: number): number {
    return a + b
  }
}
