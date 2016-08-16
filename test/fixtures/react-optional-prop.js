const React = Object;

class Foo extends React {
  props: {
    bar?: string;
  };

  render() {}
}

export default function demo () {
  const error = Foo.propTypes.bar({bar: undefined}, 'bar', 'Foo');
  if (error) {
    throw error;
  }
}
