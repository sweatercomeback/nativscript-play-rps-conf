import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';

var page: Page;
var viewModel = new Observable();
var tempSessions = [
    {
        id: '0', 
        title: 'session 1'
    },
    {
        id: '1', 
        title: 'session 2'
    },
    {
        id: '2', 
        title: 'session 3'
    }
];

export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    viewModel.set("sessions", tempSessions);
    page.bindingContext = viewModel;
}