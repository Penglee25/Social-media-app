import React from "react";
import Comment from '../../../Img/comment.png';
import Like from '../../../Img/like.png';
import Share from '../../../Img/share.png';
import Unlike from '../../../Img/unlike.png';

const PostCollections = ({ data }) => {
	return (
		<div className="Post">
			<img src={data.img} alt="" />
			<div className="postReact">
				<img src={data.liked ? Like : Unlike} alt="" />
				<img src={Comment} alt="" />
				<img src={Share} alt="" />
			</div>
            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.like} likes</span>
            <div className="detail">
                <span><b>{data.name}</b> </span>
                <span>{data.desc}</span>
            </div>
		</div>
	);
};

export default PostCollections;
