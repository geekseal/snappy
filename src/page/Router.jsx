import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "component/common/Layout";

import LoginPage from "./Login";
import HomePage from "./Home";
import ProfilePage from "./Profile";
import PostPage from "./Post";
import ChatPage from "./Chat";
import NotFoundErrorPage from "./404";
import JoinPage from "./Login/Join";
import AuthorizePage from "./Login/Authorize";

import AuthProvider from "lib/auth/AuthProvider";

import ROUTE, { ROUTE_LOGIN } from "constant/route";
import JoinPageByPagenum from "./Login/Join/[pagenum]/index";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthProvider />}>
          <Route path={ROUTE.LOGIN} >
            <Route index element={<LoginPage />} />
            <Route path={ROUTE_LOGIN.JOIN} element={<JoinPage />}>
              <Route path=":pagenum" element={<JoinPageByPagenum />} />
              <Route index element={<Navigate to="1" />} />
            </Route>
            <Route path={ROUTE_LOGIN.AUTHORIZE} element={<AuthorizePage />} />
          </Route>
          <Route path={ROUTE.LANDING} element={<></>} /> {/* 랜딩 페이지는 AuthProvider에서 렌더링합니다. */}
          <Route element={<Layout />}>
            <Route path={ROUTE.HOME} element={<HomePage />} />
            <Route path={ROUTE.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTE.POST} element={<PostPage />} />
            <Route path={ROUTE.CHAT} element={<ChatPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </Router>
  )
}