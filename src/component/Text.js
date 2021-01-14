function Text(props) {
    const {isTitle, content} = props;

const styleContent = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#743374'
}

const styleTitle = {
    fontSize: '20px',
}

    return(
      <div>
          <p style={styleTitle}>{isTitle}</p>
          <p style={styleContent}>{content}</p>
      </div>
    );
}
  export default Text;