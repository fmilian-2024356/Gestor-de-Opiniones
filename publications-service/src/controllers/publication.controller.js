import Publication from '../models/Publication.js';

export const createPublication = async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const publication = new Publication({
      title,
      category,
      content,
      author: req.user.username,
      authorId: req.user.id
    });
    await publication.save();
    res.status(201).json(publication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listPublications = async (req, res) => {
  try {
    const publications = await Publication.find().sort({ createdAt: -1 });
    res.json(publications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePublication = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) return res.status(404).json({ message: 'Publicación no encontrada' });
    if (publication.authorId !== req.user.id) {
      return res.status(403).json({ message: 'No autorizado para editar esta publicación' });
    }
    const { title, category, content } = req.body;
    publication.title = title;
    publication.category = category;
    publication.content = content;
    publication.updatedAt = new Date();
    await publication.save();
    res.json(publication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePublication = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) return res.status(404).json({ message: 'Publicación no encontrada' });
    if (publication.authorId !== req.user.id) {
      return res.status(403).json({ message: 'No autorizado para eliminar esta publicación' });
    }
    await publication.deleteOne();
    res.json({ message: 'Publicación eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
