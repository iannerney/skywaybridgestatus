"use client";
import { PageLayout } from "@/components/Layouts";
import Link from "next/link";
import { Typography } from "antd";
const { Title, Text } = Typography;

const TermsOfUsePage = () => {
    return (
        <PageLayout>
            <section>
                <Title level={1}>Terms and Conditions of Use</Title>

                <Title level={2}>1. Terms</Title>

                <Text>
                    By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of
                    Use, all applicable laws and regulations, and agree that you are responsible for compliance with any
                    applicable local laws. If you do not agree with any of these terms, you are prohibited from using or
                    accessing this site. The materials contained in this web site are protected by applicable copyright
                    and trade mark law.
                </Text>

                <Title level={2}>2. Use License</Title>

                <Text>
                    The MIT License applies to the use and distribution of this software.
                    <blockquote>
                        <Text>Copyright © 2017-{new Date().getFullYear()} IMN Services, LLC</Text>
                        <Text>
                            Permission is hereby granted, free of charge, to any person obtaining a copy of this
                            software and associated documentation files (the &quot;Software&quot;), to deal in the
                            Software without restriction, including without limitation the rights to use, copy, modify,
                            merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
                            persons to whom the Software is furnished to do so, subject to the following conditions:
                        </Text>
                        <Text>
                            The above copyright notice and this permission notice shall be included in all copies or
                            substantial portions of the Software.
                        </Text>
                        <Text>
                            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                            PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
                            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
                            OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                            DEALINGS IN THE SOFTWARE.
                        </Text>
                    </blockquote>
                </Text>
                <Title level={2}>3. Disclaimer</Title>

                <ol type="a">
                    <li>
                        The materials on this web site are provided &quot;as is&quot;. IMN Services, LLC and related
                        parties make no warranties, expressed or implied, and hereby disclaims and negates all other
                        warranties, including without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other
                        violation of rights. Further, IMN Services, LLC and related parties do not warrant or make any
                        representations concerning the accuracy, likely results, or reliability of the use of the
                        materials on this Internet web site or otherwise relating to such materials or on any sites
                        linked to this site.
                    </li>
                </ol>

                <Title level={2}>4. Limitations</Title>

                <Text>
                    In no event shall IMN Services, LLC or related parties be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption,) arising out of the
                    use or inability to use the materials on IMN Services, LLC&apos;s Internet site, even if IMN
                    Services, LLC or a authorized representative has been notified orally or in writing of the
                    possibility of such damage. Because some jurisdictions do not allow limitations on implied
                    warranties, or limitations of liability for consequential or incidental damages, these limitations
                    may not apply to you.
                </Text>

                <Title level={2}>5. Revisions and Errata</Title>

                <Text>
                    The materials appearing on IMN Services, LLC&apos;s web site could include technical, typographical,
                    or photographic errors. IMN Services, LLC does not warrant that any of the materials on its web site
                    are accurate, complete, or current. IMN Services, LLC may make changes to the materials contained on
                    its web site at any time without notice. IMN Services, LLC does not, however, make any commitment to
                    update the materials.
                </Text>

                <Title level={2}>6. Links</Title>

                <Text>
                    IMN Services, LLC has not reviewed all of the sites linked to its Internet web site and is not
                    responsible for the contents of any such linked site. The inclusion of any link does not imply
                    endorsement by IMN Services, LLC of the site. Use of any such linked web site is at the user&apos;s
                    own risk.
                </Text>

                <Title level={2}>7. Site Terms of Use Modifications</Title>

                <Text>
                    IMN Services, LLC may revise these terms of use for its web site at any time without notice. By
                    using this web site you are agreeing to be bound by the then current version of these Terms and
                    Conditions of Use.
                </Text>

                <Title level={2}>8. Governing Law</Title>

                <Text>
                    Any claim relating to IMN Services, LLC&apos;s web site shall be governed by the laws of the State
                    of Florida without regard to its conflict of law provisions.
                </Text>
            </section>

            <section id="privacy-policy">
                <Title level={1}>Privacy Policy</Title>

                <Text>
                    Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to
                    understand how we collect, use, communicate and disclose and make use of personal information. The
                    following outlines our privacy policy.
                </Text>

                <Title level={2}>Cookies</Title>

                <Text>
                    We may use cookies in order to customize this site for return visitors. These cookies are not
                    required for site functionality. Additionally, third-party widgets may install cookies depending on
                    their configuration. You are not required to accept any cookies to use this site.
                </Text>

                <Title level={2}>Google Analytics</Title>

                <Text>
                    We use a tool called “Google Analytics” to collect information about use of this site. Google
                    Analytics collects information such as how often users visit this site, what pages they visit when
                    they do so, and what other sites they used prior to coming to this site. We use the information we
                    get from Google Analytics only to improve this site. Google Analytics collects only the IP address
                    assigned to you on the date you visit this site, rather than your name or other identifying
                    information. We do not combine the information collected through the use of Google Analytics with
                    personally identifiable information. Although Google Analytics plants a permanent cookie on your web
                    browser to identify you as a unique user the next time you visit this site, the cookie cannot be
                    used by anyone but Google. Google&apos;s ability to use and share information collected by Google
                    Analytics about your visits to this site is restricted by the{" "}
                    <Link href="https://www.google.com/analytics/terms/us.html" rel="nofollow">
                        Google Analytics Terms of Service
                    </Link>{" "}
                    and the{" "}
                    <Link href="https://policies.google.com/privacy?hl=en&gl=us" rel="nofollow">
                        Google Privacy Policy
                    </Link>
                    . You can prevent Google Analytics from recognizing you on return visits to this site by disabling
                    cookies on your browser.
                </Text>

                <Title level={2}>Hotjar Tracking</Title>

                <Text>
                    We use{" "}
                    <Link href="http://www.hotjar.com" rel="nofollow">
                        Hotjar
                    </Link>{" "}
                    in order to better understand our users&apos; needs and to optimize this service and experience.
                    Hotjar is a technology service that helps us better understand our users experience (e.g. how much
                    time they spend on which pages, which links they choose to click, what users do and don&apos;t like,
                    etc.) and this enables us to build and maintain our service with user feedback. Hotjar uses cookies
                    and other technologies to collect data on our users&apos; behavior and their devices (in particular
                    device&apos;s IP address (captured and stored only in anonymized form), device screen size, device
                    type (unique device identifiers), browser information, geographic location (country only), preferred
                    language used to display our website). Hotjar stores this information in a pseudonymized user
                    profile. Neither Hotjar nor we will ever use this information to identify individual users or to
                    match it with further data on an individual user. For further details, please see Hotjar&apos;s
                    privacy policy by clicking on{" "}
                    <Link href="https://www.hotjar.com/legal/policies/privacy" rel="nofollow">
                        this link
                    </Link>
                    .
                </Text>

                <Text>
                    You can opt-out to the creation of a user profile, Hotjar&apos;s storing of data about your usage of
                    our site and Hotjar&apos;s use of tracking cookies on other websites by following this{" "}
                    <Link href="https://www.hotjar.com/legal/compliance/opt-out" rel="nofollow">
                        opt-out link
                    </Link>
                    .
                </Text>

                <Title level={2}>Questions?</Title>

                <Text>
                    If you have any questions about use of your data, or if you have any privacy concerns relating to
                    your use of this website, please contact us at{" "}
                    <Link href="mailto:contact@skywaybridgestatus.com" rel="nofollow">
                        contact@skywaybridgestatus.com
                    </Link>
                    .
                </Text>
            </section>
        </PageLayout>
    );
};

export default TermsOfUsePage;
