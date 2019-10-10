//CRÉATION D'UN MOCK AVEC JEST
describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn(),
            push : jest.fn(),
            write : jest.fn()
        };

        //Construction méthode get qui retourne un objet dbMock
        dbMock.get.mockReturnValue(dbMock);
        //Construction méthode push qui retourne un objet dbMock
        dbMock.push.mockReturnValue(dbMock);

        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});
        //Appel 1 fois du mock
        expect(dbMock.write.mock.calls.lenght).toBe(1);

    });
});
