const {suma, mensaje} = require('../../controladores/prueba')
require('dotenv').config()

describe('Pruebas en el controlador de prueba', () => {
    
    it('should generate a JWT token with num1, num2, and a custom message when valid numeric values are provided in the request body', () => {
        // Arrange
        const req = {
          body: {
            num1: 5,
            num2: 10
          }
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn()
        };
  
        // Act
        suma(req, res);
  
        // Assert
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
          resultado: 15,
          token: expect.any(String)
        });
      });
  
    test('Debe retornar la suma de dos numeros', () => {
        const req = {
            body: {
                num1: 1,
                num2: 2
            }
        }
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        suma(req, res)
        expect(res.status.mock.calls).toEqual([
            [200]
        ])
        expect(res.json.mock.calls).toEqual([
            [{
                resultado: 3,
                token: expect.any(String)
            }]
        ])
    })
    test('Debe retornar un error si los valores no son numericos', () => {
        const req = {
            body: {
                num1: 1,
                num2: '2'
            }
        }
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        suma(req, res)
        expect(res.status.mock.calls).toEqual([
            [400]
        ])
        expect(res.json.mock.calls).toEqual([
            [{
                msg: 'Los valores deben ser numericos'
            }]
        ])
    })
    test('Debe retornar un mensaje de hola mundo', () => {
        const req = {}
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        mensaje(req, res)
        expect(res.status.mock.calls).toEqual([
            [200]
        ])
        expect(res.json.mock.calls).toEqual([
            [{
                msg: 'Hola mundo'
            }]
        ])
    })
})