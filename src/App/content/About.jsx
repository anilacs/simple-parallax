const About = () => {
	return (
		<section className="about section" id="about">
			<div className="about__container container grid">
				<div className="about__data">
					<h2 className="section__title">
						About Sharing <br />
						Happiness
					</h2>
					<p className="about__description">
                    Christmas.com is your holiday superstore! We’ve curated the best holiday products from a variety of vendors to make every season special. With a name like Christmas.com it’s obvious that Christmas is our passion, but we also specialize in thoughtful holiday decorations throughout the year!  See our full selection of joyful Christmas Decorations and inspiring holiday decor , gift shops, and home accessories to keep your home festive year round!
					</p>
					<a href="#" className="button">
						Share Now
					</a>
				</div>
				<img src="assets/img/about-christmas.png" alt="about image" className="about__img" />
				<img src="assets/img/snow-img.png" alt="about image" className="about__snow-1" />
				<img src="assets/img/snow-img.png" alt="about image" className="about__snow-2" />
			</div>
		</section>
	);
};

export { About };