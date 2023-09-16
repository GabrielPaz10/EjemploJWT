const {generarJWT} = require('../../helpers/generarJWT')
require('dotenv').config()



describe('generarJWT', () => {
    it('should generate a JWT token when provided with valid input', () => {
        // Arrange
        const body = { username: 'testuser' };
        const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'; // Replace with the expected token value
  
        // Act
        const result = generarJWT(body);
  
        // Assert
        return expect(result).resolves.toContain(expectedToken);
      });
});

    // Test that the 'generarJWT' function generates a JWT token when provided with valid input.
    
