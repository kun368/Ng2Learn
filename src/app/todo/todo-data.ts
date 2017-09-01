import {InMemoryDbService} from "angular-in-memory-web-api";
import {Todo} from "./todo.model";
/**
 * Created by zhangzhengkun on 2017/9/1.
 */

export class InMemoryTodoDbService implements InMemoryDbService {

  createDb(): {} {
    let todos: Todo[] = [
      {id: '5090074b-5aa0-4d24-afe9-f7802d7fb873', desc: '起床', completed: true},
      {id: '5fb731e4-8e09-4d28-a081-156458d37257', desc: '上学', completed: false},
      {id: 'd33c2a1f-ad42-4420-a7b6-07548702b95f', desc: '背单词', completed: false},
    ];
    return {todos}
  }

}
