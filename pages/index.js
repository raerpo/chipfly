import MainInput from '../components/mainInput';

const Index = ({ cities }) => (
  <div>
    <h1>Where do you want to go?</h1>
    <MainInput
      items={cities}
      onChange={selectedItem => console.log(selectedItem)}
    />
  </div>
);

Index.getInitialProps = () => {
  const cities = [
    'Bogota',
    'Valdivia',
    'Buenos aires'
  ];
  return {
    cities
  };
}

export default Index;