import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };
  static listarLivroPorNome = (req,res)=>{
    const nome = req.query.nome;
    livros.find({titulo:nome},{},(err,livros)=>{
      if(!err){
        res.status(200).send({message:livros})
      }else{
        res.status(500).send(`${err.message} -- erro nome não cadastrado`)
      }
    })
  }
  static listarLivroPorId = (req, res) => {
    const id = req.params.id;

    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livros) => {
        if (!err) {
          res.status(200).send(livros);
        } else {
          res
            .status(400)
            .send({ message: `${err.message} - Id não encontrado` });
        }
      });
  };
  static listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora;
    livros.find({ editora: editora }, {}, (err, livros) => {
      if (!err) {
        res.status(200).send({ message: livros });
      } else {
        res
          .status(4000)
          .send({ message: `${err.message} - Nenhuma editora Encontrada` });
      }
    });
  };
  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro Atualizado comn sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deletarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro deletado com sucesso !" });
      } else {
        res.send({ message: err.message });
      }
    });
  };
}

export default LivroController;
