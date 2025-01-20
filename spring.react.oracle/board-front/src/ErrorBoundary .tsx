import React, { ReactNode, ErrorInfo } from 'react';

// Props와 State의 타입 정의
interface ErrorBoundaryProps {
  children: ReactNode; // 자식 컴포넌트의 타입
}

interface ErrorBoundaryState {
  hasError: boolean; // 에러 상태
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }; // 초기 상태 설정
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // 에러 발생 시 상태 업데이트
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // 에러 정보 로깅
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러 발생 시 대체 UI
      return <h1>Something went wrong.</h1>;
    }

    // 에러가 없으면 자식 컴포넌트 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary;
