// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

class User {
  static #list = []
  constructor(email, login, password) {
    this.email = email
    this.login = login
    this.password = password
    this.id = new Date().getTime()
  }
}
<<<<<<< HEAD
=======

>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
  verifyPassword = (password) => this.password === password

  static add = (user) => {
    this.#list.push(user)
  }

<<<<<<< HEAD
  static getList = () => {
    return this.#list
  }

  static getById = (id) => {
    return this.#list.find((user) => user.id === id)
  }

  static deleteById = (id) => {
    const index = this.#list.findIndex(
      (user) => user.id === id,
    )
    if (index !== -1) {
      this.#list.splice(index, 1)
      return true
    } else {
      return false
    }
  }

  static updateById = (id, data) => {
    const user = User.getById(id)

    if (user) {
      User.update(user, data)
    }
  }
=======
  static getList = () =>  this.#list
 
  static getById = (id) => 
    this.#list.find((user) => user.id === id)

    static deleteById = (id) => {
      const index = this.#list.findIndex(
        (user) => user.id === id,
        )

        if(index !== -1) {
          this.#list.splice(index, 1)
          return true
        } else {
          return false
        }
    }

  static updateById = (id, data) => {
    const user = this.getById(id)

    if(user) {
      this.update(user, data)

>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
      return true
    } else {
      return false
    }
  }

<<<<<<< HEAD
  static update = (user, { email }) => {
    if (email) {
=======
  static update = (user, { email}) => {
      if(email) {
  >>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
        user.email = email
      }
    }
  }
}

<<<<<<< HEAD
class Product {
  static #list = [
    {
      id: 10001,
      name: 'Product 1',
      price: 100,
      description: 'some text',
      createDate: new Date(),
    },
    {
      id: 10002,
      name: 'Product 2',
      price: 200,
      description:
        'some text some  text',
      createDate: new Date(),
    },
    {
      id: 10003,
      name: 'Product 3',
      price: 300,
      description: 'some text',
      createDate: new Date(),
    },
  ]
  id = Product.getId()

  constructor(name, price, description) {
    this.name = name
    this.price = price
    this.description = description
    this.createDate = new Date()
  }

  static getId = () => {
    let res = ''
    for (let i = 0; i < 5; i++) {
      res += Math.round(Math.random() * 9)
    }
    return Number(res)
  }

  static getList = () => {
    return this.#list
  }

  static addProduct = (product) => {
    this.#list.push(product)
  }

  static getById = (id) => {
    return this.#list.find((product) => product.id === id)
  }

  static deleteById = (id) => {
    const index = this.#list.findIndex(
      (product) => product.id === id,
    )
    if (index !== -1) {
      this.#list.splice(index, 1)
      return true
    } else {
      return false
    }
  }

  static updateById = (id, data) => {
    const product = Product.getById(Number(id))

    if (product) {
      Product.update(product, data)
      return true
    } else {
      return false
    }
  }
  static update = (
    product,
    { name, price, description },
  ) => {
    if (name) {
      product.name = name
    }
    if (price) {
      product.price = price
    }
    if (description) {
      product.description = description
    }
  }
}


=======
>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку
  const list = User.getList()

  const list = User.getList()

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'index',
<<<<<<< HEAD
=======

>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
    data: {
      users: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

<<<<<<< HEAD

router.post('/user-create', function (req, res) {
  // console.log(req.body)
  const { email, login, password } = req.body
  const user = new User(email, login, password)
=======
router.post('/user-create', function (req, res) {
  const {email, login, password} = req.body;

  const user = new User(email, login, password);
>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9

  User.add(user)

  console.log(User.getList())

  res.render('success-info', {
    style: 'success-info',
<<<<<<< HEAD
    info: `Користувач створений`,
=======
    info: 'Користувач створений'
>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
  })
})

// ================================================================
<<<<<<< HEAD
router.get('/user-delete', function (req, res) {
  // console.log(req.body)
  const { id } = req.query

  User.deleteById(Number(id))

  res.render('success-info', {
    style: 'success-info',
    info: `Користувач видалений`,
=======

router.get('/user-delete', function (req, res) {
  const {id} = req.query;

   User.deleteById(Number(id))

  res.render('success-info', {
    style: 'success-info',
    info: 'Користувач видалений',
>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
  })
})

// ================================================================
<<<<<<< HEAD
router.post('/user-update', function (req, res) {
  const { email, password, id } = req.body
  let result = false
  const user = User.getById(Number(id))

  if (user.verifyPassword(password)) {
    User.update(user, { email })
=======

router.post('/user-update', function (req, res) {
  const { email, password, id} = req.body
  let result = false

  const user = User.getById(Number(id))

  if(user.verifyPassword(password)) {
    User.update(user, {email})
>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9
    result = true
  }

  res.render('success-info', {
    style: 'success-info',
<<<<<<< HEAD
    info: result
      ? `Дані користувача змінено`
      : `Сталася помилка`,
  })
})
// ===============================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/product-list', function (req, res) {
  // res.render генерує нам HTML сторінку

  const list = Product.getList()

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('product-list', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'product-list',

    data: {
      products: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/product-create', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('product-create', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'product-create',
  })
  // ↑↑ сюди вводимо JSON дані
})


// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.post('/product-create', function (req, res) {
  const { name, price, description } = req.body
  const product = new Product(name, price, description)
  if (
    product.name.length > 0 &&
    product.price.length > 0 &&
    product.description.length > 0
  ) {
    Product.add(product)
    res.render('alert', {
      style: 'alert',
      info: 'Успішне виконання дії',
      alert: 'Товар успішно додано',
    })
  } else {
    res.render('alert', {
      style: 'alert',
      info: 'Помилка',
      alert: 'Всі дані повинні бути введені',
    })
  }
})

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/product-edit', function (req, res) {
  const { id } = req.query
  const product = Product.getById(Number(id))

  if (product) {
    res.render('product-edit', {
      style: 'product-edit',
      product: product,
    })
  } else {
    res.render('alert', {
      style: 'alert',
      info: 'Помилка',
      alert: 'Товар з таким ID не знайдено',
    })
  }
})

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.post('/product-edit', function (req, res) {
  const product = req.body
  const result = Product.updateById(
    Number(product.id),
    product,
  )

  if (result) {
    res.render('alert', {
      style: 'alert',
      info: 'Успішне виконання дії',
      alert: 'Товар успішно оновлено',
    })
  } else {
    res.render('alert', {
      style: 'alert',
      info: 'Помилка',
      alert: 'Товар з таким ID не знайдено',
    })
  }
})

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/product-delete', function (req, res) {
  const { id } = req.query

  const result = Product.deleteById(Number(id))
  if (result) {
    res.render('alert', {
      style: 'alert',
      info: 'Успішне виконання дії',
      alert: 'Товар успішно видалено',
    })
  } else {
    res.render('alert', {
      style: 'alert',
      info: 'Помилка',
      alert: 'Товар з таким ID не знайдено',
    })
  }
})


// ================================================================
=======
    info: result 
    ? 'Email пошта оновлена' 
    : 'Сталася помилка',
  })
})
>>>>>>> 76485054a94ff4936df900df5cad8c48934002f9


// Підключаємо роутер до бек-енду
module.exports = router
