import Mock from 'mockjs'

// users
Mock.mock(
  /\/users\?page=\d(&order=\.+)?/,

  'get',{
   'users|15': [
      { id: /\d{8}/,username: /[A-Z]{1}[a-z]{4,8}/ ,email: 'ytnhc@outlook.com',createdAt: 'December 16, 2018 17:31' },
   ],
   'cols': ['id','username','email','createdAt'],
   'keyCol': 'id',
   'bars': 105,
   'defaultNums': 15,
})

Mock.mock(/\/products\?page=\d/,'get',{
  'products|15': [
     { id: /\d{8}/,name: /[A-Z]{1}[a-z]{4,8}/ ,price: 100},
  ],
  'cols': ['id','name','price'],
  'keyCol': 'id',
  'bars': 45,
  'defaultNums': 15,
})
