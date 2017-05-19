console.log("hi");
import { EventData } from 'data/observable';
import { Page } from 'ui/page';

var page: Page;

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
    // page.bindingContext = fromObject({
    //     sessions: tempSessions
    // });
    console.log("fu")
}