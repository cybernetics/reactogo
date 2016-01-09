import { connect } from 'react-redux';

let s = getStyle();

let NotFound = () =>
  (<div style={s.container}>
    Page not found
  </div>);


function getStyle() {
  return {
    container: {
      marginTop: 100,
      textAlign: 'center',
    },
  };
}
NotFound.displayName = 'NotFound';

export default connect((state) => ({viewport: state.viewport}))(NotFound);
