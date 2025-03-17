import React from "react";

const UserCard = ({ data }) => {
	return (
		<div className="card bg-base-100 max-w-96 shadow-sm">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="profile-image"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{data?.firstName} {data?.lastName}
				</h2>
				<p>{data?.age}</p>
				<p>{data?.about}</p>
				<p>{data?.gender}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-active btn-primary">Ignore</button>
					<button className="btn btn-active btn-secondary">Interested</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
