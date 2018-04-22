import React, { Component } from 'react';

class Static extends Component {

	state={

		projects: [
			{
				image: 'http://via.placeholder.com/660x500',
				title: 'Project',
				description: 'Project Description',
				selected: false
			},
			{
				image: 'http://via.placeholder.com/660x500',
				title: 'Project',
				description: 'Project Description',
				selected: false
			},
			{
				image: 'http://via.placeholder.com/660x500',
				title: 'Project',
				description: 'Project Description',
				selected: false
			},
			{
				image: 'http://via.placeholder.com/660x500',
				title: 'Project',
				description: 'Project Description',
				selected: false
			},
			{
				image: 'http://via.placeholder.com/660x500',
				title: 'Project',
				description: 'Project Description',
				selected: false
			},
			{
				image: 'http://via.placeholder.com/660x500',
				title: 'Project',
				description: 'Project Description',
				selected: false
			}
		]
	}

	render(){
		const { projects } = this.state;
		return (					
			<div>
				<ResponsiveMenu 
					projects={projects}
				/>
				<SiteContainer 
					projects={projects}
				/>
			</div>	
		);
	} 
}


const ResponsiveMenu = (props) => {
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
					<a href="https://github.com/castlemaninc" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x"></i></a>	
					<a href="http://twitter.com/Bryan_Castleman" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-3x"></i></a>
					<a href="https://www.linkedin.com/in/bryancastleman/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-3x"></i></a>					
				</footer>			
			</div>					
		</div>
	);
}

const SiteContainer = (props) => {
	// console.log(props);
	return (
		<div className="site-grid" id="top">
			<SideBar 
				
			/>
			<MobileHeader />
			<ProjectsCardsContainer />
			<SiteFooter />					
		</div>
	);
}

const SideBar = (props) => {
	return (
		<header>
			<div className="sidebar-content">
				<SideBarLogo 
					name={"Bryan Castleman"}
				/>
				<SideBarNav 

				/> 
				<SideBarSocial />
			</div>	
		</header>
	);
}

const SideBarLogo = (props) => {
	return (
		<div className="sidebar-logo">
			{props.name}
		</div>
	);
}

const SideBarNav = (props) => {
	console.log(props);
	return (
		<nav>
			<SideBarNavMainLinks />
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

const SideBarNavMainLinks = () => {
	return (
		<ul>
			<li className="page-title"><a href="about.html">About</a></li>
			<li className="page-title"><a href="contact.html">Contact</a></li>
		</ul>
	); 
}

const SideBarSocial = () => {
	return (
		<div className="social-links">					
			<div><a href="https://github.com/castlemaninc" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a></div>
			<div><a href="http://twitter.com/Bryan_Castleman" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg"></i></a></div>
			<div><a href="https://www.linkedin.com/in/bryancastleman" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a></div>
		</div>
	);
}


const MobileHeader = () => {
	return (
		<header className="mobile-header">
			<MobileLogo 
				name={"Bryan Castleman"}
			/>
			<OpenMobileNavIcon />
		</header>
	);
}

const MobileLogo = (props) => {
	return(
		<div>{props.name}</div>
	);
}

const OpenMobileNavIcon = () => {
	return(
		<a href="#"><div className="bars-click-area"><i className="fas fa-bars fa-lg"></i></div></a>
	);
}

// ************ Projects Container ********************

const ProjectsCardsContainer = () => {
	return (
		<div className="projects-grid">
			<ProjectCard
				href={"#"}
				src={"http://via.placeholder.com/660x500"} 
				title={"Flexbox Visualized"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>
			<ProjectCard
				href={"#"} 
				src={"http://via.placeholder.com/660x500"}
				title={"ApartmentSite"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>
			<ProjectCard
				href={"#"} 
				src={"http://via.placeholder.com/660x500"}
				title={"Squillo"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>
			<ProjectCard
				href={"#"} 
				src={"http://via.placeholder.com/660x500"}
				title={"Responsive Layouts"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>
			<ProjectCard
				href={"#"} 
				src={"http://via.placeholder.com/660x500"}
				title={"JS Calculator"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>
			<ProjectCard
				href={"#"} 
				src={"http://via.placeholder.com/660x500"}
				title={"Project"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>
			<ProjectCard
				href={"#"} 
				src={"http://via.placeholder.com/660x500"}
				title={"Project"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>
			<ProjectCard
				href={"#"} 
				src={"http://via.placeholder.com/660x500"}
				title={"Project"}
				description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}
			/>					
		</div>
	);
}

const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<div><a href={props.href}><img src={props.src} alt="" /></a></div>
			<div className="project-about">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

// ************ Site Footer ********************

const SiteFooter = () => {
	return (
		<footer>
			<h4><a href="#top"><i className="fas fa-angle-up fa-2x"></i><br />Back to Top</a></h4>
		</footer>
	);
}

export default Static; 