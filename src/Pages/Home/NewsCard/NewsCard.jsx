import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaRegBookmark, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = (props) => {
    const { _id, title, details, image_url, author, rating, total_view } = props.news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "40px" }} src={author.img} roundedCircle />
                <div className='ps-3 flex-grow-1'>
                    <p className='mb-0 '>{author?.name}</p>
                    <p><span>{moment(author?.published_date).format('yyyy-MM-D')}</span></p>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />

                </div>


            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read more</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating className='text-warning pe-2'
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />



                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye /><span className='ps-2'>{total_view}</span>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsCard;