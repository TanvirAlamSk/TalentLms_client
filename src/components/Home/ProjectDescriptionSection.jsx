import practicalProject from '../../assets/DiscripImage/practical-project.ead19e3b.svg';
const ProjectDescriptionSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-10 my-10 md:px-8'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-3xl font-bold'>Learn market standard work through real life projects</h2>
                <p className='mt-10'>From very basic to advanced level you will learn step by step in our career tracks. For this, do real life projects, which will give you the confidence to work in the job and freelancing market.</p>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={practicalProject} className='rounded' alt="practicalProject" />
            </div>
        </div>
    );
};

export default ProjectDescriptionSection;