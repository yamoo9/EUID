import './PrivacyPolicy.sass';

import React from 'react';

import withHelmet from '@HOC/withHelmet';
import Catchphrase from '@components/Catchphrase/Catchphrase';
import HeadlineSection from '@components/HeadlineSection/HeadlineSection';

/**
 * @class PrivacyPolicy
 * @summary 정책/환불 규정 페이지 컴포넌트
 */
const PrivacyPolicy = () => {
	return (
		<main id="privacyPolicy" aria-labelledby="Catchphrase">
			<div className="wrapper">
				<Catchphrase shape="triangle">Privacy Policy</Catchphrase>
			</div>
			<div className="wrapper privacyPolicy">
				<HeadlineSection
					className="policy-section"
					title="개인정보 취급 방침"
					description="&quot;이듬&quot; 블렌디드 러닝의 개인정보 취급 방침을 읽어보세요."
				>
					<div className="privacyPolicy__box">
						<h2>개인정보 수집이용 목적</h2>
						<p>
							회사의 개인정보 수집 목적은 교육 서비스를 제공하기 위함이며, 회사는 서비스 제공을 원활하게 하기 위해 필요한 최소한의
							정보만을 수집하고 있습니다.
						</p>

						<p>서비스 이용에 따른 대금결제, 환불 등에 필요한 정보를 추가로 수집할 수 있습니다.</p>

						<p>
							회사는 개인정보를 수집, 이용목적 이외에 다른 용도로 이용하거나 회원의 동의 없이 제 3자에게 이를 제공하지 않습니다.
						</p>

						<h2>개인정보 수집항목</h2>

						<p>
							회사는 교육 프로그램 신청 및 제공 등을 위해 다음과 같은 개인정보를 수집하고 있습니다. 회사는 개인의 주민등록번호 및
							아이핀 정보를 받지 않습니다.
						</p>

						<ul>
							<li>
								<h3>가. 개인정보 항목</h3>

								<p>
									회원 필수항목: 신청자 이름, 연락처, 전자우편주소, 페이스북 ID 및 페이스북에서 제공하는 정보, 카카오톡
									ID 및 카카오톡에서 제공하는 정보
								</p>

								<p>부가항목: 환불요청 시 환불계좌번호</p>

								<p>
									다만, 서비스 이용과정에서 서비스 이용기록, 접속 로그, 접속 IP 정보, 결제기록 등이 생성되어 수집될 수
									있습니다.
								</p>
							</li>
							<li>
								<h3>나. 수집방법</h3>
								<p>프로그램 신청시 회원가입 정보 및 고객센터를 통한 전화 및 온라인 상담</p>
							</li>
						</ul>

						<h2>개인정보 보유 및 이용기간</h2>

						<p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 개인정보를 지체 없이 파기합니다.</p>

						<p>
							단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원
							개인정보를 보관합니다.
						</p>

						<ul>
							<li>
								<h3>가. 상법 등 법령에 따라 보존할 필요가 있는 경우</h3>

								<ul>
									<li>
										<h4>① 계약 또는 청약철회 등에 관한 기록</h4>
										<p>
											보존근거: 전자상거래 등에서의 소비자보호에 관한 법률<br />
											보존기간: 5년
										</p>
									</li>

									<li>
										<h4>② 대금결제 및 재화 등의 공급에 관한 기록</h4>
										<p>
											보존근거: 전자상거래 등에서의 소비자보호에 관한 법률<br />
											보존기간: 5년
										</p>
									</li>

									<li>
										<h4>③ 소비자의 불만 또는 분쟁처리에 관한 기록</h4>
										<p>
											보존근거: 전자상거래 등에서의 소비자보호에 관한 법률<br />
											보존기간: 3년
										</p>
									</li>

									<li>
										<h4>④ 신용정보의 수집, 처리 및 이용 등에 관한 기록</h4>

										<p>
											보존근거: 신용정보의 이용 및 보호에 관한 법률<br />
											보존기간: 3년
										</p>
									</li>

									<li>
										<h4>⑤ 본인확인에 관한 기록보존</h4>

										<p>
											보존근거: 정보통신망 이용촉진 및 정보보호에 관한 법률 제44조의5 및 시행령 제29조<br />
											보존기간: 6개월
										</p>
									</li>
								</ul>
							</li>

							<li>
								<h3>나. 기타</h3>
								<p>회원의 개별적인 동의가 있는 경우에는 개별 동의에 따른 기간까지 보관합니다.</p>
							</li>
						</ul>

						<h2>개인정보 제3자 제공</h2>

						<p>
							가. 회사는 회원들의 개인정보를 개인정보의 수집이용 목적에서 고지한 범위 내에서 사용하며, 회원의 사전 동의 없이 동
							범위를 초과하여 이용하거나 원칙적으로 회원의 개인정보를 제 3자에게 제공하지 않습니다. 단, 아래의 경우에는 예외로
							합니다.
						</p>

						<ul>
							<li>① 회원들이 사전에 공개 또는 제3자 제공에 동의한 경우</li>
							<li>
								② 법령의 규정에 의거하나, 수사, 조사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관 및 감독 당국의 요구가
								있는 경우
							</li>
						</ul>
					</div>
				</HeadlineSection>
				<HeadlineSection
					className="table-section"
					title="환불 규정"
					description="&quot;이듬&quot; 블렌디드 러닝 환불 기준은 다음과 같습니다.<div>(카드 결제는 카드 수수료를 제외한 금액 기준으로 환불)"
				>
					<table className="privacyPolicy__table">
						<caption className="a11y-hidden">환불 규정 표</caption>
						<tbody>
							<tr>
								<th scope="row">오픈 데이 이전</th>
								<td>수강료 전액 환불</td>
							</tr>
							<tr>
								<th scope="row">오픈 데이 이후</th>
								<td>수강료 2/3 환불</td>
							</tr>
							<tr>
								<th scope="row">2주 오프라인 수업 전</th>
								<td>수강료 1/2 환불</td>
							</tr>
							<tr>
								<th scope="row">2주 오프라인 수업 후</th>
								<td>수강료 환불 없음</td>
							</tr>
						</tbody>
					</table>
				</HeadlineSection>
			</div>
		</main>
	);
};

export default withHelmet(PrivacyPolicy, '정책/환불 규정 ↼ 이듬 블렌디드 러닝');
