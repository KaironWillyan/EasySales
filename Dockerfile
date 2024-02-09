FROM maven:latest as build

WORKDIR /app

COPY . /app

RUN mvn package

FROM openjdk:17-ea-17-jdk

WORKDIR /app

COPY --from=build /app/target/EasySalesApp.jar /app

EXPOSE 8090

CMD ["java", "-jar", "EasySalesApp.jar"]