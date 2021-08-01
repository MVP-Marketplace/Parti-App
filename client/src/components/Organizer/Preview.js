import { FiVideo } from 'react-icons/fi';
import { RiArrowGoForwardFill, RiArrowGoBackFill } from 'react-icons/ri';
import Background from './Options/Background';

const mainDivStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '20px',
};

const btnStyles = {
	color: 'gray',
};

const prevBoxStyle = {
	width: '40vw',
	height: '40vw',
	margin: '20px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'lightGrey',
};

const uploadBtnStyle = {
	width: '40vw',
	height: '2em',
	backgroundColor: 'white',
	fontSize: '1.2em',
	color: '#b0b0b0',
	borderRadius: '2px',
	border: '1px solid',
	boxShadow: '0 4px #f0f0f0',
};

function Preview() {
	return (
		<div style={mainDivStyle}>
			<div>
				<a href='#'>
					<RiArrowGoBackFill size={30} style={btnStyles} />
				</a>
				<a href='#'>
					<RiArrowGoForwardFill size={30} style={btnStyles} />
				</a>
			</div>
			<div style={prevBoxStyle}>
				<h6>
					Card Previews - card renders with options to choose what order to
					place contributed videos
				</h6>
				<Background />
			</div>
		</div>
	);
}

export default Preview;
