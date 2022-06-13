import {Constant} from '../evaluator/constants/Constant';
import ConstantComp from './tree/constants/ConstantComp';
import OrComp from './tree/operations/OrComp';
import {Or} from '../evaluator/operations/Or';
import {And} from '../evaluator/operations/And';
import AndComp from './tree/operations/AndComp';

// needed to separate components' creation from nodes as it was crashing the tests

export default class ComponentFactory {
  static createConstant(instance: Constant): JSX.Element {
    return <ConstantComp me={instance}/>;
  }

  static createAnd(instance: And) {
    return <AndComp
      left={instance.getLeft().createComponent()}
      right={instance.getRight().createComponent()}
      me={instance}
    />;
  }

  static createOr(instance: Or) {
    return <OrComp
      left={instance.getLeft().createComponent()}
      right={instance.getRight().createComponent()}
      me={instance}
    />;
  }
}
