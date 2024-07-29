import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const addImage = () => {
        if (imageUrl && description) {
            setImages([...images, { url: imageUrl, description }]);
            setImageUrl('');
            setDescription('');
        }
    };

    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    const editImage = (index) => {
        setCurrentImage({ ...images[index], index });
        setShowModal(true);
    };

    const handleModalSave = () => {
        const updatedImages = [...images];
        updatedImages[currentImage.index] = {
            url: currentImage.url,
            description: currentImage.description
        };
        setImages(updatedImages);
        setShowModal(false);
    };

    return (
        <div className="container">
            <h1 className="my-4 text-center">Album</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="btn btn-primary m-1" onClick={addImage}>Add Photo</button>
            </div>
            <div className="row">
                {images.map((image, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100">
                            <img src={image.url} className="card-img-top" alt={image.description} />
                            <div className="card-body">
                                <p className="card-text">{image.description}</p>
                                <Button variant="success" onClick={() => editImage(index)} className="me-2">Edit</Button>
                                <Button variant="danger" onClick={() => removeImage(index)}></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentImage?.url || ''}
                                onChange={(e) => setCurrentImage({ ...currentImage, url: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentImage?.description || ''}
                                onChange={(e) => setCurrentImage({ ...currentImage, description: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleModalSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Gallery;