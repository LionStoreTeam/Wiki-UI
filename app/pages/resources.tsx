import { useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { Resource } from '../types/types';



const ResourcesPage = () => {
    const [resources, setResources] = useState<Resource[]>([]);

    useEffect(() => {
        fetch('/api/resources')
            .then((res) => res.json())
            .then((data) => setResources(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold">Recursos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                    <ResourceCard
                        key={resource.id}
                        title={resource.title}
                        description={resource.description}
                        price={resource.price}
                        fileUrl={resource.fileUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ResourcesPage;
