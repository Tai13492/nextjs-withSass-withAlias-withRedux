import { Card, Row, Col } from "antd";

const Courses = () => {
  return (
    <div style={{ padding: 6, backgroundColor: "#fff" }}>
      <h3
        className="title is-2 has-text-centered"
        id="โปรแกรมอบรม"
        style={{ marginTop: "1.5rem" }}
      >
        โปรแกรมอบรม
      </h3>
      <div className="container">
        <h3 className="title is-3 m-pl-12"> แบบสองวัน </h3>
        <Row gutter={24} justify="center" type="flex" className="mb-12">
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  alt="โปรแกรมอบรม Happier สุขยิ่งกว่า"
                  src="/static/HappierIcon.jpeg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="Happier"
                description="เนื้อหาหลักสูตรพัฒนาขึ้นจากวิชาการด้านต่างๆได้แก่
                จิตวิทยาเชิงบวก จิตบำบัดบนพื้นฐานของสติ วิทยาการสมอง และ
                จิตบำบัดแนวซาเทียร์"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  alt="My Life Force ปลดล็อคพลังชีวิต"
                  src="/static/MyLifeForceIcon.jpeg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="My Life Force"
                description=" พัฒนาขึ้นจากวิชาการด้านต่างๆ ได้แก่
                จิตบำบัดและการพัฒนาศักยภาพมนุษย์แนวซาเทียร์
                ศาสตร์การบริหารพลังและการผ่อนคลายตามภูมิปัญญาตะวันออก"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  alt="Career Destiny"
                  src="/static/CareerDestinyIcon.jpeg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="Career Destiny"
                description=" การอบรมนี้ จะช่วยตอบคำถามในใจของคนทำงาน
                ที่จะเป็นประโยชน์กับกาารวางแผนเส้นทางงานให้เหมาะกับตัวเอง"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  alt="Inner Confidence"
                  src="/static/InnerConfidenceIcon.jpeg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="Inner Confidence"
                description=" หลักสูตรนี้ออกแบบสำหรับคนที่ต้องการเติมพลังความเชื่อมั่นให้กับตัวเอง
                ผู้ที่จะลงทะเบียนหลักสูตรนี้ จะต้องผ่านการอบรมหลักสูตร Happier
                สุขยิ่งกว่า และ My Life Force ปลดล็อคพลังชีวิต
                ทั้งสองหลักสูตรมาก่อน"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} justify="center" type="flex" className="mb-12">
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={<img alt="Seeds Of Love" src="/static/SeedsOfLove.jpeg" />}
              hoverable={true}
            >
              <Card.Meta
                title="Seeds Of Love"
                description="สร้างสุขบนเส้นทางความสัมพันธ์
                เน้นการฝึกฝนให้เกิดทักษะในบรรยากาศของความเป็นกัลยาณมิตรต่อกัน"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={<img alt="LettingGo" src="/static/LettingGoIcon.jpeg" />}
              hoverable={true}
            >
              <Card.Meta
                title="Letting Go"
                description="หลักสูตรนี้ออกแบบสำหรับคนที่ต้องการจัดการปมค้างใจบางอย่าง
                เรื่องราวในอดีตที่ยังคงส่งอิทธิพลต่อจิตใจในปัจจุบัน"
              />
            </Card>
          </Col>
        </Row>
        <h3 className="title is-3 m-pl-12"> แบบหนึ่งวัน </h3>
        <Row gutter={24} justify="center" type="flex" className="mb-12">
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  alt="คิดเพิ่มอีกนิด ชีวิตดีขึ้นอีกเยอะ"
                  src="/static/ThinkMore.jpeg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="Think more"
                description="แก้ปัญหาให้เก่งขึ้น พัฒนาระบบความคิดให้ดีขึ้น
                รู้ทันกับดักทางความคิด มีวิธีคิดที่ดีและรู้จักตั้งคำถามให้เป็น
                ด้วยหลักสูตรคิดเพิ่มอีกนิด ชีวิตดีขึ้นอีกเยอะ"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={<img alt="ก้าวเล็กๆ" src="/static/SmallStepIcon.jpeg" />}
              hoverable={true}
            >
              <Card.Meta
                title="ก้าวเล็กๆ"
                description="ออกแบบเพื่อช่วยสร้างการเปลี่ยนแปลงพฤติกรรมสุขภาพในชีวิตประจำวัน
                อันเป็นพื้นฐานของสุขภาพและความสุขในชีวิต"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={
                <img
                  alt="เปลี่ยนความเครียดเป็นพลังบวก"
                  src="/static/AlterStress.jpeg"
                />
              }
              hoverable={true}
            >
              <Card.Meta
                title="เปลี่ยนความเครียดเป็นพลังบวก"
                description="เหมาะสำหรับคนที่ต้องการลดความเครียดในชีวิตประจำวันลง
                คนที่เครียดง่าย
                หรือมีเรื่องรบกวนใจที่ต้องการพื้นที่พักใจและทบทวน"
              />
            </Card>
          </Col>
          <Col span={6} md={6} sm={8} xs={24} className="mb-12">
            <Card
              cover={<img alt="Make Easy" src="/static/MakeEasyIcon.jpeg" />}
              hoverable={true}
            >
              <Card.Meta
                title="คุยเรื่องยาก ให้เป็นเรื่องง่าย"
                description="เพิ่มทักษะการสื่อสาร และการสร้างความเข้าใจกัน
                ในกรณีที่มีอารมณ์ความรู้สึกเข้าไปเกี่ยวข้อง
                หรือมีความคิดเห็นที่แตกต่างกัน"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Courses;
