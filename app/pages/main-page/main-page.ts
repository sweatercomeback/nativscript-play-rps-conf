import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';

import { MainViewModel } from './main-view-model';
var page: Page;

var vm = new MainViewModel();

export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = vm;
    vm.init();
}
