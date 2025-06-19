const BooksService = require('./books.service');

let mockDatabase = [
  {
    _id: 'abc1',
    name: "Harry Potter"
  }
];

const MongoLibStub = {
  getAll: () => [...mockDatabase],
  create: (collection, data) => {
    const newId = 'newBookId123';
    const newBookWithId = { _id: newId, ...data };
    mockDatabase.push(newBookWithId);
    return newBookWithId;
  }
};

beforeEach(() => {
  mockDatabase = [
    {
      _id: 'abc1',
      name: "Harry Potter"
    }
  ];
});

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks({});
      console.log(books[0]);
      expect(books.length).toEqual(1);
      expect(books[0]).toEqual(expect.objectContaining({ name: "Harry Potter" }));
    });
  });

  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      const newBook = {
        title: 'La Divina comedia',
        author: 'Dante Alighieri',
        year: 1967
      };

      const createdBook = await service.createBook(newBook);
        console.log('Libro creado', createdBook);

      expect(createdBook).toMatchObject(newBook);

    });
  });
});
