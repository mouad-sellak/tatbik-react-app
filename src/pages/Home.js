const Home = () => {
    return (
        <div>
            <div className="hero flex md:flex-col justify-center items-center h-[calc(100vh-74px)] md:gap-4">
                <img src="./hero-image.jpg" className="object-cover max-w-lg rounded-lg" />
                <div className="flex gap-2 flex-col items-center">
                    <h1 className="text-white">Plongez dans la beauté de l'arabe</h1>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Commencez maintenant !</button>
                </div>
            </div>
        </div>
    );
};

export default Home;