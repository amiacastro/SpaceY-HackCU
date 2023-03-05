import { FriendData } from './constants';

class ViewModel {
    constructor() {
        this.friends = FriendData;
        this.visibleFriends = FriendData;
    }

    searchFriends(value) {
        if (!value.length) return this.visibleFriends = this.friends;

        const filteredData = this.friends.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()));

        if (filteredData.length) {
            this.visibleFriends = filteredData;
        } else {
            this.visibleFriends = this.friends;
        }
    }
}

let ViewModelInstance = new ViewModel();

export default ViewModelInstance;