export class UsersService {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  getUserList() {
    return this.users;
  }

  getUserInfo(id: number) {
    const users = this.users.find(
      (u) => {
        return u.id === id;
      }
    );

    return users;
  }


}
