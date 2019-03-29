import { Card, Row, Col } from "antd";

export default () => {
  return (
    <div style={{ padding: 6, backgroundColor: "#f5f5f9" }}>
      <h3
        className="title is-2 has-text-centered"
        id="application"
        style={{ marginTop: "1.5rem" }}
      >
        คอร์สออนไลน์
      </h3>
      <div className="container">
        <Row gutter={24} justify="center" type="flex" className="mb-12">
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  className="app-icon"
                  alt="Sook คลายเศร้า"
                  src="/static/appSookNoDepress.jpg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="SOOK คลายเศร้า"
                description="ให้ความรู้เรื่องการจัดการภาวะซึมเศร้าอย่างเป็นระบบ"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  className="app-icon"
                  alt="SOOK คลายกังวล"
                  src="/static/appSookNoAnxious.png"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="SOOK คลายกังวล"
                description="พัฒนาขึ้นสำหรับคนมีพื้นอารมณ์วิตกกังวล เครียดง่าย มีอาการแพนิค"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  className="app-icon"
                  alt="Sook หลับดี"
                  src="/static/appSookGoodSleep.jpg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="SOOK หลับดี"
                description="ให้ความรู้เรื่องการนอนหลับอย่างมีคุณภาพซึ่งเป็นความสุขอย่างหนึ่งของชีวิต"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  className="app-icon"
                  alt="Sook คำปรึกษา"
                  src="/static/appSookConsult.png"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="SOOK คำปรึกษา"
                description="เหมาะสำหรับผู้ทำหน้าที่ด้านการปรึกษาในด้านต่างๆ"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} justify="center" type="flex" className="mb-12">
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  className="app-icon"
                  alt="Sook ลดนำ้หนัก"
                  src="/static/appSookLoseWeight.jpg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="SOOK ลดนำ้หนัก"
                description="ให้คุณสามารถวางแผนการควบคุมนำ้หนักตัวได้อย่างมีประสิทธิภาพ"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  className="app-icon"
                  alt="Sook เส้นทางรัก"
                  src="/static/appSookLoveLife.jpg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="SOOK เส้นทางรัก"
                description="ออกแบบสำหรับคนต้องการเข้าใจเรื่องความรักและความสัมพันธ์"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
