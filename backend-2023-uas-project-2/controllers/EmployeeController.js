// import model student
const Employee = require("../models/Employee.js");

class EmployeeController {
    async index(req, res) {
        // TODO 4: Tampilkan data
        const employees = await Employee.all();

        const data = {
            message: "Menampilkan data Employee",
            data: employees,
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        const employees = await Employee.create(req.body);
        const data = {
            message: "Menambahkan data Employee",
            data: employees,
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id students
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employees = await Employee.find(id);

        if (employees) {
            // update data
            const employeUpdated = await Employee.update(id, req.body);
            const data = {
                message: "Mengupdate data Employee",
                data: employeeUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const employee = await Employee.find(id);

        if (employee) {
            // hapus data
            await Employee.delete(id);
            const data = {
                message: "Menghapus data Employee",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const Employee = await Employee.find(id);

        if (employee) {
            const data = {
                message: "Menampilkan detail data employee",
                data: employee,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }

    async active(req, res) {
      const { id } = req.params;
      
        const Employee = await Employee.findByStatus({ status: 'active' });
        if (employee) {
          const data = {
              message: "Menampilkan detail data employee",
              data: employee,
          };

          res.status(200).json(data);
      }
      else {
          const data = {
              message: "Data tidak ada",
          };

          res.status(404).json(data);
      }
    }
    
    async inactive(req, res) {
      
        const employees = await Employee.findByStatus({ status: 'inactive' });
        const { id } = req.params;
      
        if (employee) {
          const data = {
              message: "Menampilkan detail data employee",
              data: employees,
          };

          res.status(200).json(data);
      }
      else {
          const data = {
              message: "Data tidak ada",
          };

          res.status(404).json(data);
      }
    }
    
    async terminated(req, res) {
    
        const employees = await Employee.findByStatus({ status: 'terminated' });
        const { id } = req.params;
      
        if (employee) {
          const data = {
              message: "Menampilkan detail data employee",
              data: employee,
          };

          res.status(200).json(data);
      }
      else {
          const data = {
              message: "Data tidak ada",
          };

          res.status(404).json(data);
      }
    }
      async search(req, res) {
        const { name } = req.query;
    
        if (!name) {
          return res.status(400).json({ message: 'Please provide a name to search for.' });
        }
    
        try {
          const employees = await Employee.findByStatus({
            where: {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            },
          });
    
          res.status(200).json({ message: 'Employees found', data: employees });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    }
}

// make an object Student Controller
const object = new EmployeeController();

// export object
module.exports = object;