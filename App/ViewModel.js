import { FriendData } from './constants';

class ViewModel {
    constructor() {
        this.friends = FriendData;
    }
}

let ViewModelInstance = new ViewModel();

export default ViewModelInstance;