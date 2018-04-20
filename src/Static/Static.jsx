import React from 'react';

const Static = () => {
	return (		
		<body>
			<ResponsiveMenu />
			<SiteContainer />
		</body>		
	);
}

const ResponsiveMenu = () => {
	return(
		<div className="responsive-menu">
			<div className="responsive-grid">
				<header>
					<a href="#"><div className="times-click-area"><i className="fas fa-times fa-2x"></i></div></a>
				</header>
				<nav className="responsive-nav">
					<ul>
						<li className="responsive-page-title"><a href="about.html">About</a></li>
						<li className="responsive-page-title"><a href="contact.html">Contact</a></li>
					</ul>
					<div className="responsive-projects-list">
						<h3 className="responsive-list-title">Projects</h3>
						<ul>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
							<li className="responsive-project-title"><a href="#">Project</a></li>
						</ul>
					</div>				
				</nav>
				<footer className="responsive-social-links">
					<a href="https://github.com/castlemaninc" target="_blank"><i className="fab fa-github fa-3x"></i></a>	
					<a href="http://twitter.com/Bryan_Castleman" target="_blank"><i className="fab fa-twitter fa-3x"></i></a>
					<a href="https://www.linkedin.com/in/bryancastleman/" target="_blank"><i className="fab fa-linkedin-in fa-3x"></i></a>					
				</footer>			
			</div>					
		</div>
	);
}

const SiteContainer = () => {
	return (
		<div className="site-grid" id="top">
			<SideBar />
			<MobileHeader />
			<ProjectsContainer />
			<SiteFooter />					
		</div>
	);
}

const SideBar = () => {
	return (
		<header>
			<div className="sidebar-content">
				<SideBarLogo />
				<SideBarNav /> 
				<SideBarSocial />
			</div>	
		</header>
	);
}

const SideBarLogo = () => {
	return (
		<div className="sidebar-logo">Bryan Castleman</div>
	);
}

const SideBarNav = () => {
	return (
		<nav>
			<ul>
				<li className="page-title"><a href="about.html">About</a></li>
				<li className="page-title"><a href="contact.html">Contact</a></li>
			</ul>
			<div className="sidebar-projects-list">
				<h3 className="sidebar-list-title">Projects</h3>
				<ul>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>
					<li className="project-title"><a href="#">Project</a></li>							
				</ul>
			</div>
		</nav>
	);
}

const SideBarSocial = () => {
	return (
		<div className="social-links">					
			<div><a href="https://github.com/castlemaninc" target="_blank"><i className="fab fa-github fa-lg"></i></a></div>
			<div><a href="http://twitter.com/Bryan_Castleman" target="_blank"><i className="fab fa-twitter fa-lg"></i></a></div>
			<div><a href="https://www.linkedin.com/in/bryancastleman" target="_blank"><i className="fab fa-linkedin-in fa-lg"></i></a></div>
		</div>
	);
}


const MobileHeader = () => {
	return (
		<header className="mobile-header">
			<div>Logo</div>
			<a href="#"><div className="bars-click-area"><i className="fas fa-bars fa-lg"></i></div></a>
		</header>
	);
}

const ProjectsContainer = () => {
	return (
		<div className="projects-grid">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />					
		</div>
	);
}

const ProjectCard = () => {
	return (
		<div className="project-card">
			<div><a href="https://placeholder.com"><img src="http://via.placeholder.com/660x500" /></a></div>
			<div className="project-about">
				<h3>Project</h3>
				<p>Project Description</p>
			</div>
		</div>
	);
}

const SiteFooter = () => {
	return (
		<footer>
			<h4><a href="#top"><i className="fas fa-angle-up fa-2x"></i><br />Back to Top</a></h4>
		</footer>
	);
}

export default Static; 