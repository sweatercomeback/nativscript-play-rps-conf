import { Observable } from 'data/observable';
import { Session } from '../../shared/interfaces'
import { SessionViewModel } from '../session-page/session-view-model'; 

export class MainViewModel extends Observable {
    private _allSessions: Array<SessionViewModel> = new Array<SessionViewModel>();
    private _session: Array<SessionViewModel>;
    
    constructor() {
        super();
    }
    
    get sessions(): Array<SessionViewModel> {
        return this._allSessions;
    } 
    
    public init() {
        
    }
}