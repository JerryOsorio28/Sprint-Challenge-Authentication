const server = require('./server.js')//import file being tested
const request = require('supertest'); //import supertest dependency

//<---------- REGISTER ENDPOINT TEST ---------------
describe('server.js', () => {
    describe('REGISTER POST /', () => {

        it('should receive an object', () => {
            return request(server)
                .post('/register')
                .then(res => {
                    expect(res.body).toEqual({})
                })
        })
        
        it('returns JSON', done => {
            request(server)
               .post('/register')
               .then(res => {
                   expect(res.type).toMatch("text/html") //<-----??
                   done();
               })
       })

       it('returns 200 OK', () => {
        return request(server)
          .post('/register')
          .then(res => {
            expect(res.status).toBe(200); //<-- returns 404?
          });
      });
        
    })
})
//<---------- LOGIN ENDPOINT TEST ---------------
describe('server.js', () => {
    describe('POST LOGIN /', () => {

        it('should receive an object', () => {
            return request(server)
                .post('/login')
                .then(res => {
                    expect(res.body).toEqual({})
                })
        })

        it('returns JSON', done => {
            request(server)
               .post('/login')
               .then(res => {
                   expect(res.type).toMatch("text/html") //<-----??
                   done();
               })
       })

       it('returns 200 OK', () => {
        return request(server)
          .post('/login')
          .then(res => {
            expect(res.status).toBe(200); //<-- returns 404?
          });
      });
       
    })
})
//<---------- JOKES ENDPOINT TEST ---------------
describe('server.js', () => {
    describe('GET /', () => {
        it('should received an object', () => {
            return request(server)
                .get('/jokes')
                .then(res => {
                    expect(res.body).toEqual({})
                })
        })

        it('returns JSON', done => {
             request(server)
                .get('/jokes')
                .then(res => {
                    expect(res.type).toMatch("text/html") //<-----??
                    done();
                })
        })

        it('returns 200 OK', () => {
            return request(server)
              .post('/jokes')
              .then(res => {
                expect(res.status).toBe(200); //<-- returns 404?
              });
          });
    })
})
