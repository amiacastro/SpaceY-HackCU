import { FriendData } from './constants';

class ViewModel {
    constructor() {
        this.friends = FriendData;
    }
}

let viewModel = new ViewModel();

export default viewModel;