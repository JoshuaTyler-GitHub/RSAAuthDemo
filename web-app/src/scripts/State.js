class State {
  static getState = null;
  static initialState = {
    animation1: false,
    animation2: false,
    animation3: false,
    delay: 0,
    isLoading: false,
    isSuccess: false,
    password: '',
    username: '',
  };
  static setState = null;

  static onDelay(rawInput) {
    const delay = isNaN(rawInput)
      ? 0 
      : Math.min(Math.max(rawInput, 0), 5000);
    State.setState({ delay });
  }

  static onPassword(password) {
    State.setState({ password });
  }

  static onSignInAnimationUpdate() {
    const { isLoading } = State.getState();
    if (isLoading) {
      State.setState({
        animation1: false,
        animation2: true,
      });
    }
  }

  static onSignInStart() {
    State.setState({
      animation1: true,
      isLoading: true,
    });
    setTimeout(() => {
      State.onSignInAnimationUpdate();
    }, 2000);
  }

  static onSignInStop() {
    State.setState({
      animation1: false,
      animation2: false,
      isLoading: false,
    });
  }

  static onSignInSuccess() {
    State.setState({
      animation3: true,
      isSuccess: true,
    });
  }

  static onUsername(username) {
    State.setState({ username });
  }
}
export default State;
