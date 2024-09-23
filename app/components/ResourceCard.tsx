import { ResourceCardProps } from "../types/types";

const ResourceCard = ({ title, description, price, fileUrl }: ResourceCardProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={fileUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <div className="text-xl font-semibold text-green-600 mt-2">${price}</div>
            </div>
        </div>
    );
};

export default ResourceCard;