const { Book } = require('../models')
class BooksControllers {
    static async create(req, res) {
        try {
            const data = req.body
            console.log(data)
            const book = await Book.create(data)
            return res.send("sukses")
        } catch (e) {
            console.log(e.message)
            return res.status(400).json({
                "message" : "error"
            })
        }

    }
    static async read(req, res) {
        try {
            const books = await Book.findAll()
         
            return res.status(200).json({
                "books": books
            })
        } catch (e) {
            console.log(e.message)
            return res.status(400).json({
                "message" : "error"
            })
        }
    }

    static async readbyid(req, res) {
        try {
            const id = req.params.id

            const book = await Book.findOne(
                { where: { id: id } }
            )

            
            if (book === null) {
                throw {
                    code: 400,
                    message: "Gagal update buku"
                };
            }
            return res.status(200).json({
                "books": book
            })


        } catch (e) {
            console.log(e.message)
            return res.status(400).json({
                "message" : "error"
            })
        }
    }


    static async update(req, res) {
        try {
            const id = req.params.id
            const data = req.body

            const updateBook = await Book.update(
                data, { where: { id: id } }
            )
            console.log(updateBook)

            if (updateBook[0] === 0) {
                throw {
                    code: 400,
                    message: "Gagal update buku"
                };
            }


            return res.status(200).json({
                "message": "suskses update"
            })


        } catch (e) {
            console.log(e.message)
            return res.status(400).json({
                "message" : "error"
            })
        }
    }
    static async delete(req, res) {

        try {
            const id = req.params.id

            const deleteBook = await Book.destroy(
                { where: { id: id },  returning: true }
               
            )



            if (deleteBook === 0) {
                throw {
                    code: 400,
                    message: "Gagal Hapus buku"
                };
            }

            return res.status(200).json({
               "meessage":"berhasil"
            })


        } catch (e) {
            console.log(e.message)
            return res.status(400).json({
                "message" : "error"
            })
        }
    }
}

module.exports = BooksControllers;